"use client";
import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
    prompt: () => Promise<void>;
    userChoice: Promise<{
        outcome: "accepted" | "dismissed";
        platform: string;
    }>;
};

export default function PWAPrompt() {
    const [deferredPrompt, setDeferredPrompt] =
        useState<BeforeInstallPromptEvent | null>(null);
    const [showInstall, setShowInstall] = useState(false);

    useEffect(() => {
        const handler = (e: Event) => {
            const promptEvent = e as BeforeInstallPromptEvent;
            promptEvent.preventDefault();
            setDeferredPrompt(promptEvent);
            setShowInstall(true);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;

        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);

        setDeferredPrompt(null);
        setShowInstall(false);
    };

    return showInstall ? (
        <div className="fixed bottom-5 left-5 right-5 bg-baseclr text-white p-4 rounded-md shadow-lg flex justify-between items-center z-50">
            <span className="text-sm">Add this app to your home screen?</span>
            <button
                onClick={handleInstall}
                className="ml-4 bg-white text-baseclr px-3 py-1 rounded hover:bg-baseclr transition text-sm">
                Install
            </button>
        </div>
    ) : null;
}
