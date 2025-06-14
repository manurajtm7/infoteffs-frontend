import { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from "react-router-dom";

const QRScanner = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const scanner = new Html5QrcodeScanner("qr-reader", {
            fps: 10,
            qrbox: { width: 250, height: 250 },
        });

        scanner.render(
            (decodedText) => {
                window.location.href = decodedText
            },
            (error) => console.warn("Scanning failed", error)
        );

        return () => scanner.clear();
    }, []);

    return (
        <div className="min-h-[70vh] text-white flex flex-col items-center justify-center gap-4">
            <div id="qr-reader" className="w-4/5 md:w-1/3 flex flex-col items-center justify-center" />
        </div>
    );
};

export default QRScanner;
