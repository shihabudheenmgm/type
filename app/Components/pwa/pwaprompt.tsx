"use client";
import { useEffect, useState } from "react";

export default function PWAPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
    const [showInstall, setShowInstall] = useState(false);

    useEffect(() => {
        const handler = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowInstall(true);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;

        (deferredPrompt as any).prompt();
        const { outcome } = await (deferredPrompt as any).userChoice;
        console.log(`User response to the install prompt: ${outcome}`);

        setDeferredPrompt(null);
        setShowInstall(false);
    };

    return showInstall ? (
        <div className="fixed bottom-5 left-5 right-5 bg-blue-600 text-white p-4 rounded-md shadow-lg flex justify-between items-center">
            <span>Add this app to your home screen?</span>
            <button
                onClick={handleInstall}
                className="ml-4 bg-white text-blue-600 px-3 py-1 rounded">
                Install
            </button>
        </div>
    ) : null;
}
