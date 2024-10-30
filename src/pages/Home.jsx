import React from "react";
import { Link } from "react-router-dom";
import Zanahoria from "../assets/zanahoria.png"
import Desing from "../assets/desing.png"
import icongoogle from "../assets/icongoogle.png"
import iconface from "../assets/iconface.png"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../database/Firebase";
import { useNavigate } from "react-router-dom";



export const Home = () => {
    const navegador = useNavigate ()
    const provider = new GoogleAuthProvider();
    const handleGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                navegador("/GetStarted")
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    return (
        <div className="bg-white w-screen h-screen relative">
            <div className="bg-[#4CAD73] rounded-full w-[37rem] h-[35rem] absolute bottom-[404px] -left-40 z-0">
            </div>
            <div className="absolute z-1 top-16 left-24 flex justify-center">
                <p className="titulo text-[#FFFFFF] text-[26px]">Kangsayur</p>
                <img className="absolute -right-8 -top-[1px]" src={Zanahoria} alt="" />
            </div>
            <div className="absolute z-1 flex justify-center w-52 left-[76px] top-[146px]">
                <img className="max-w-[120%]" src={Desing} alt="" />
            </div>
            <div className="absolute z-1 top-[440px] gap-5 flex flex-col text-center justify-center p-5">
                <Link to="/login">
                    <button className="login text-[#FFFFFF] text-sm bg-[#4CAD73] w-80 h-12 rounded-lg">Login</button>
                </Link>
                <Link to="/register">
                    <button className="Register text-[#4CAD73] text-sm bg-[#FFFFFF] w-80 h-12 rounded-lg border-2 border-[#4CAD73]">Register</button>
                </Link>
                <div className="flex">
                    <p className="-mt-1 text-[#828282]">___________________</p>
                    <p className="text-[#333333] text-[10px] mt-[7px] ml-1">Or login with</p>
                    <p className="-mt-1 text-[#828282] ml-1">___________________</p>
                </div>
                <button onClick={handleGoogle} className="border-2 border-[#BDBDBD] rounded-lg h-8 w-80 flex items-center">
                    <img className="ml-3 w-[14px]" src={icongoogle} alt="" />
                    <p className="google ml-28 text-xs text-[#4F4F4F]">Google</p>
                </button>
                <button className="bg-[#2D9CDB] rounded-lg h-8 w-80 -mt-[10px] flex items-center">
                    <img className="ml-[0.8rem] w-[14px]" src={iconface} alt="" />
                    <p className="facebook ml-[106px] text-xs text-[#FFFFFF]">Facebook</p>
                </button>
            </div>
        </div>
    )
}