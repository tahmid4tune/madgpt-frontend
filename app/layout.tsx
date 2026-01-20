import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MuiSetup from "./MuiSetup";
import { Avatar, Divider } from "@mui/material";
import NewChatButton from "./components/NewChatButton";
import ChatHistory from "./components/history/historyData";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MadGPT",
  description: "AI Demo App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MuiSetup>
          {
            <div className="flex text-white">
              <div className="w-1/6 min-h-screen bg-gray-900 flex flex-col p-4">
                <NewChatButton />
                <span className="font-bold">Your Chats</span>
                <Divider sx={{ backgroundColor: "gray" }} />
                {<ChatHistory />}
                <div className="mt-auto rounded-xl bg-gray-700 text-white p-3 font-bold">
                  <div className="flex">
                    <Avatar sx={{ bgcolor: "pink" }} />
                    <div className="my-auto ml-2">Tahmid Ali</div>
                  </div>
                </div>
              </div>
              <div className="w-5/6 flex flex-col bg-gray-950 px-5">
                <div className="border-b-2 border-gray-900 font-bold py-5">
                  MadGPT
                </div>
                <div className="p-5">{children}</div>
              </div>
            </div>
          }
        </MuiSetup>
      </body>
    </html>
  );
}
