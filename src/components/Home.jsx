import React, { useState ,useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { addToPastes, updateToPaste } from '../redux/pasteSlice'

const Home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId")
    const dispatch = useDispatch();
    const allPastes = useSelector((state)=> state.paste.pastes)

    useEffect(() => {
        if (pasteId){
          const paste = allPastes.find((p)=> p._id === pasteId)
          setTitle(paste.title)
          setValue(paste.content)
        }
    }, [pasteId])

    function createPaste(){
        const paste = {
            _id: pasteId || Date.now().toString(36),
            createdAt : new Date().toISOString(),
            title: title,
            content: value
        }

        if (pasteId){
            //updation if there is pasteId
            dispatch(updateToPaste(paste))

        }else{
            // creation
            dispatch(addToPastes(paste))
        }
        setValue("")
        setTitle("")
        setSearchParams({ })

    }
    return (
        <div className="flex flex-col items-center ">
            <div className="mt-6 flex flex-row gap-7 place-content-between w-[800px]">
                <input className="p-2 rounded-xl mt-2 text-gray-50 bg-zinc-900 w-[66%] pl-4" type="text" value={title} placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
                <button onClick={createPaste} className="rounded-md  border-slate-100 home-btn">
                    {pasteId ? "Update My Paste" : "Create My Paste"}
                </button>
            </div>
            <div className="mt-8">
                <textarea className="p-2 rounded-xl mt-2 bg-zinc-900 min-w-[100%] p-4 "cols={100} rows={18} value={value} placeholder="Enter paste here" onChange={(e) => setValue(e.target.value)} />
            </div>
        </div>
    )
}

export default Home;