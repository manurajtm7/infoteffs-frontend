import { useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Link } from "react-router-dom";

const QRGenerator = ({ link }) => {
    const [text, setText] = useState(link);

    useEffect(() => {
        const handleGenerateRoom = async () => {
            try {
                const res = await fetch("http://localhost:4000/generate-room");
                const data = await res.json();

                const room_id = data.roomId;
                setText(`http://localhost:5173/chat/:${room_id}`);
            } catch (error) {
                console.error("Error generating room:", error);
            }
        };

        handleGenerateRoom();
    }, []);
    return (
        <div className="min-h-[80vh] text-white flex flex-col items-center justify-center gap-4">
            <h1 className=" mb-5">Scan QR for chat</h1>
            {text && <QRCodeCanvas value={text} size={200} level="H" includeMargin={true} />}
            <Link to={text} className="border-2  px-5 p-2 rounded-lg mt-5">Go to chat</Link>
        </div>
    );
};

export default QRGenerator;
