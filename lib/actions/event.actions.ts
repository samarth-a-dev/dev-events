'use server';

import Event from '@/database/event.model';
import connectDB from '@/lib/mongodb';

export const getSimilarEventsBySlug = async (slug: string) => {
  'use cache';

  try {
    await connectDB();

    const event = await Event.findOne({ slug });
    if (!event) return [];

    const similarEvents = await Event.find({
      _id: { $ne: event._id },
      tags: { $in: event.tags },
    }).lean();

    // Convert BSON ObjectIds & dates into plain JSON types
    return JSON.parse(JSON.stringify(similarEvents));
  } catch (error) {
    console.error("Error fetching similar events:", error);
    return [];
  }
};
