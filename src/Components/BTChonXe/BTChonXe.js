import { set } from 'lodash'
import React,{useState} from 'react'

export default function BTChonXe() {

    const [img, setColor] = useState({srcImg: './img/car/black-car.jpg'})

    let chonXe = (color) =>{
            let colorCar = `./img/car/${color}-car.jpg`
            setColor({...img,srcImg:colorCar})
    }

    return (
        <div className ='container'>
            <h1 className='text-center text-danger'>Bài tập chọn xe</h1>
            <div className='row'>
                <div className='col-6'>
                    <img src={img.srcImg} width={400} height={400}/>
                </div>
                <div className='col-6'>
                    <button onClick={()=>chonXe('black')} style={{backgroundColor:'black',color:'white'}} >Black car</button>
                    <button onClick={()=>chonXe('red')} className='ml-4' style={{backgroundColor:'red',color:'black'}}>Red car</button>
                    <button onClick={()=>chonXe('silver')} className='ml-4' style={{backgroundColor:'sliver',color:'black'}}>Silver car</button>
                    <button onClick={()=>chonXe('steel')} className='ml-4' style={{backgroundColor:'gray',color:'black'}}>Steel car</button>
                </div>
            </div>
        </div>
    )
}
