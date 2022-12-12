import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout"
import BasicMasonry from "./features/BasicMasonry";
import Display from "./features/Display"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                {/*<Route index element={<Editor_Container/>}/>*/}
                <Route index element={<BasicMasonry/>}/>
                {/*<Route path="display" element={<Display/>}/>*/}
                <Route path="display/:selected_image_name" element={<Display/>}/>
                {/*<Route path="masonry" element={<Masonry/>}/>*/}
            </Route>
        </Routes>
    )
}

export default App
