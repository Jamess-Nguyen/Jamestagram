import { useEffect } from "react";
import Header from '../componennts/header';
// import Sidebar from '../componennts/sidebar';
import Timeline from '../componennts/timeline';

export default function Dashboard(){
    useEffect(()=> {
        document.title = 'Jamestagram'
    }, []);

    return(
        <div className="bg-gray-background">
            <Header />
            <div className="grid">
                <Timeline />
                {/* <Sidebar /> */}
            </div>
        </div>
    );

}