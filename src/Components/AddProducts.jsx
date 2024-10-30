import React, { useState } from 'react'
import { database, storage } from '../database/Firebase';
import { ref, uploadBytes , getDownloadURL } from 'firebase/storage';
import { set , ref as  dbRef } from 'firebase/database';


export const AddProducts = () => {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");//cuando va a capturar o recibir un dato numerico debe llevar el estado 0
    const [cantidad, setCantidad] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [image, setImage] = useState(null);
    const [categoria, setCategoria] = useState("");
    const [nombrep, setNombrep] = useState("");
    const [preciop, setPreciop] = useState("");
    const [cantidadp, setCantidadp] = useState("");
    const [descripcionp, setDescripcionp] = useState("");
    const [imagep, setImagep] = useState(null);
    const [categoriap, setCategoriap] = useState("");
    const handleImage = (e) => {//la e es un evento
        //console.log(e.target.files[0])
        if (e.target.files[0]) {//aqui estamos actualizando para mostrar el archivo
            setImage(e.target.files[0])
        }
        if (e.target.files[0]) {
            setImagep(e.target.files[0])
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const storageRef = ref(storage, `Products/${image.name}`);
        try {
            const snapshot = await uploadBytes(storageRef, image);
            const  url = await getDownloadURL(snapshot.ref);
            const newProduct = dbRef( database , `Products/${nombre}`)
            set( newProduct , {
                username: nombre,
                price: precio,
                quantity: cantidad,
                description: descripcion,
                image: url,
                category: categoria
            } )
            setNombre("")
            setPrecio("")
            setCantidad("")
            setDescripcion("")
            setImage(null)
        } catch (error) {
            console.log("no ha sido agregado" + error)
        }
    }

    const SpecialOffer = async (e) => {
        e.preventDefault();
        const storageRef = ref(storage, `Offer/${imagep.name}`);
        try {
            const snapshott = await uploadBytes(storageRef, imagep);
            const  urll = await getDownloadURL(snapshott.ref);
            const newProductt = dbRef( database , `Offer/${nombre}`)
            set( newProductt , {
                username: nombrep,
                price: preciop,
                quantity: cantidadp,
                description: descripcionp,
                image: urll,
                category: categoriap
            } )
            setNombrep("")
            setPreciop("")
            setCantidadp("")
            setDescripcionp("")
            setImagep(null)
        } catch (error) {
            console.log("no ha sido agregado" + error)
        }
    }


    return (
        <div className='w-screen h-auto'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <input type="file"  onChange={handleImage} />
                <button type='submit'>Enviar</button>
                <input 
                type="text" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                placeholder='Ingresa el nombre' 
                />

                <input 
                type="text" 
                value={precio} 
                onChange={(e) => setPrecio(e.target.value)} 
                placeholder='Ingresa el precio' 
                />

                <input 
                type="text" 
                value={cantidad} 
                onChange={(e) => setCantidad(e.target.value)} 
                placeholder='Ingresa la cantidad' 
                />

                <textarea 
                name="" 
                value={descripcion} 
                rows="3" 
                cols="50" 
                onChange={(e) => setDescripcion(e.target.value)} 
                id="" 
                placeholder='Ingresa una descripcion'>
                </textarea>
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="Vegetales">Vegetales</option>
                    <option value="Frutas">Frutas</option>
                </select>
                {/* <input 
                type="text" 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                /> */}
            </form>
            <form onSubmit={SpecialOffer} className='flex flex-col'>
                <input type="file" onChange={handleImage} />
                <input type="text" 
                value={nombrep}
                onChange={(e) => setNombrep(e.target.value)}
                placeholder='Ingresa el nombre'
                />

                <input 
                type="text" 
                value={preciop} 
                onChange={(e) => setPreciop(e.target.value)} 
                placeholder='Ingresa el precio' 
                />

                <input 
                type="text" 
                value={cantidadp} 
                onChange={(e) => setCantidadp(e.target.value)} 
                placeholder='Ingresa la cantidad' 
                />

                <textarea 
                name="" 
                value={descripcionp} 
                rows="3" 
                cols="50" 
                onChange={(e) => setDescripcionp(e.target.value)} 
                id="" 
                placeholder='Ingresa una descripcion'>
                </textarea>
                <select value={categoriap} onChange={(e) => setCategoriap(e.target.value)}>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Meat">Meat</option>
                    <option value="Eggs">Eggs</option>
                    <option value="Drinks">Drinks</option>
                    <option value="Bakery">Bakery</option>
                </select>

                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}
