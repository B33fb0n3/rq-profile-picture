'use server'

import {fetchProfilePicture} from "@/app/fetcher";
import {db} from "@/lib/database";
import {accounts} from "@/lib/database/schema";

export const getProfilePicture = async () => {
    return fetchProfilePicture();
}

export const changeProfilePicture = async (toDefault: boolean) => {
    return db.update(accounts).set({
        profilePicture: toDefault ? null : "/new-profile.png"
    })
}