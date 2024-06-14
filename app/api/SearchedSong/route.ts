// pages/api/searchedSong.ts

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

interface SearchRequestBody {
    searchString: string;
}

async function getSpotifyAccessToken(): Promise<string> {
    const clientId = process.env.SPOTIFY_CLIENT_ID!;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
    const authBuffer = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

    const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
        headers: {
            'Authorization': `Basic ${authBuffer}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    return response.data.access_token;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    try {
        const reqBody: SearchRequestBody = await request.json();
        const { searchString } = reqBody;

        // Ensure searchString is provided
        if (!searchString) {
            return NextResponse.json({
                error: 'Search string is required'
            }, {
                status: 400
            });
        }

        const accessToken = await getSpotifyAccessToken();

        const searchResponse = await axios.get('https://api.spotify.com/v1/search', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            params: {
                q: searchString,
                type: 'track'
            }
        });

        const tracks = searchResponse.data.tracks.items;

        const formattedTracks = tracks.map((track: any) => ({
            title: track.name,
            artists: track.artists.map((artist: any) => artist.name).join(', '),
            album: track.album.name,
            previewUrl: track.preview_url,
            externalUrl: track.external_urls.spotify
        }));

        return NextResponse.json({
            data: formattedTracks
        });
    } catch (error) {
        console.error('Error occurred while searching songs:', error);
        return NextResponse.json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
