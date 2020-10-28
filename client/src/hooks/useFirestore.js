import {useState, useEffect} from 'react'
import { projectFirestore } from '../firebase/config'

const useFirestore = (collection) => {
    const [docs, setDocs] = useState(null);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    console.log('DOC DATA '+doc.data())
                    documents.push({...doc.data(), id: doc.id})
                })
                setDocs(documents);
                
            })

        return () => {
            unsub();
        }
    }, [collection])
    
    return { docs }
}

export default useFirestore