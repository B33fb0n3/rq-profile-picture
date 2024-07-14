import {db} from "@/lib/database";

export const fetchProfilePicture = async () => {
    const profile = await db.query.accounts.findFirst({
        columns: {
            profilePicture: true,
        }
    });

    return profile?.profilePicture
}