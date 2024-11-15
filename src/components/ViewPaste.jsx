import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
    const {id} = useParams();
    const allPastes = useSelector((state)=> state.paste.pastes);
    const paste = allPastes.filter((p)=> p._id === id)[0];

    return (
        <div className="flex flex-col items-center ">
            <div>
                <input className="p-2 rounded-xl mt-5 text-gray-50 bg-zinc-900 w-[800px] pl-4" disabled type="text" value={paste.title} placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
                    {/* <button onClick={createPaste} className="rounded-md  border-slate-100 home-btn">
                        {pasteId ? "Update My Paste" : "Create My Paste"}
                    </button> */}
            </div>
            <div className="mt-8 w-[800px]">
                <textarea className="p-2 rounded-xl mt-2 bg-zinc-900 min-w-[100%] p-4 " disabled rows={18} value={paste.content} placeholder="Enter paste here" onChange={(e) => setValue(e.target.value)} />
            </div>
        </div>
    )
}


export default ViewPaste;;