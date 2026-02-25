import { useEffect, useEffectEvent, useState } from 'react'

function AutoSaveForm() {

    const [ formData, setFormData ] = useState({name:"", email:""});

    const saveData = useEffectEvent(() => {
                console.log("Form Data : ", formData);
            });

    useEffect(() => {
        const interval = setInterval(() => {
            saveData();            
        }, 3000);
        return () => clearInterval(interval);
    })

  return (
    <div>
        <form>
            <input 
            type="text" 
            placeholder='Enter your name'
            value={formData.name} 
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />

            <br /><br />

            <input 
            type="email" 
            placeholder='Enter your Email'
            value={formData.email} 
            onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
        </form>
    </div>
  )
}

export default AutoSaveForm