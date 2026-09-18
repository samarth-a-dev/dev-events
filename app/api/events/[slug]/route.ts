import { NextRequest, NextResponse } from 'next/server';

import Event from '@/database/event.model';
import connectDB from '@/lib/mongodb';

// Define route params type for type safety.
type RouteParams = {
  params: Promise<{
    slug: string;
  }>;
};

/**
 * GET /api/events/[slug]
 * Fetches a single event by its slug.
 */
export async function GET(
  req: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  try {
    // Connect to database.
    await connectDB();

    // Await and extract slug from params.
    const { slug } = await params;

    // Validate slug parameter.
    if (!slug || typeof slug !== 'string' || slug.trim() === '') {
      return NextResponse.json(
        { message: 'Invalid or missing slug parameter' },
        { status: 400 }
      );
    }

    // Sanitize slug before querying the database.
    const sanitizedSlug = slug.trim().toLowerCase();

    // Query event by slug. lean() returns a plain JSON-serializable object.
    const event = await Event.findOne({ slug: sanitizedSlug }).lean();

    // Handle event not found.
    if (!event) {
      return NextResponse.json(
        { message: `Event with slug '${sanitizedSlug}' not found` },
        { status: 404 }
      );
    }

    // Return successful response with event data.
    return NextResponse.json(
      { message: 'Event fetched successfully', event },
      { status: 200 }
    );
  } catch (error) {
    // Log details only during development.
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching event by slug:', error);
    }

    // Handle known configuration errors without exposing internals.
    if (error instanceof Error) {
      if (error.message.includes('MONGODB_URI')) {
        return NextResponse.json(
          { message: 'Database configuration error' },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { message: 'Failed to fetch event' },
        { status: 500 }
      );
    }



    return NextResponse.json(
      { message: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
