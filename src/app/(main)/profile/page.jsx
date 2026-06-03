"use client";
import { UpdateModal } from "@/components/UpdateModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

export default function ProfilePage() {
  const userData = authClient.useSession();
  const user = userData?.data?.user;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <Card className="border border-gray-200 w-full max-w-md overflow-hidden">
        {/* Cover */}
        <div className="h-28 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500" />

        {/* Avatar */}
        <div className="flex flex-col items-center -mt-12 px-6 pb-8">
          <Avatar className="w-24 h-24 border-4 border-white shadow-md">
            <Avatar.Image
              src={user?.image}
              alt={user?.name}
              referrerPolicy="no-referrer"
            />
            <Avatar.Fallback className="text-2xl font-bold bg-purple-100 text-purple-700">
              {user?.name?.[0]?.toUpperCase()}
            </Avatar.Fallback>
          </Avatar>

          <h1 className="mt-4 text-2xl font-bold">{user?.name}</h1>
          <p className="text-sm text-gray-500 mt-1">{user?.email}</p>

          <div className="w-full mt-6 border-t border-gray-100 pt-6 flex flex-col gap-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400 font-medium uppercase tracking-wider text-xs">
                User ID
              </span>
              <span className="font-mono text-xs text-gray-600 truncate max-w-48">
                {user?.id}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400 font-medium uppercase tracking-wider text-xs">
                Email Verified
              </span>
              <span
                className={`text-xs px-2 py-1 rounded-full font-medium ${user?.emailVerified ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"}`}
              >
                {user?.emailVerified ? "Verified" : "Not Verified"}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400 font-medium uppercase tracking-wider text-xs">
                Member Since
              </span>
              <span className="text-gray-600 text-xs">
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "—"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-6">
          <UpdateModal />
        </div>
      </Card>
    </div>
  );
}
