import { useEffect } from "react";
import Header from '../components/header';
import Sidebar from '../components/sidebar/sidebar';
import Timeline from '../components/timeline';

export default function Dashboard(){
    useEffect(()=> {
        document.title = 'Jamestagram'
    }, []);

    return(
        <div className="bg-gray-background">
            <Header />
            <div className="grid">
                <Timeline />
                <Sidebar />
            </div>
        </div>
    );

}