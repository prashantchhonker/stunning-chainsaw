import {useNavigate, useParams} from "react-router-dom"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
    set_previous_image,
    set_next_image
} from "../app/store.js"

const Display = () => {
    let {selected_image_name} = useParams()

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            width: "100vw",
            height: "100vh",
            cursor: "pointer",
        }}>
            <ChevronLeftIcon style={{width: '96px', height: '96px'}} onClick={() => {
                console.log('left')
                // set_previous_image
            }}/>

            <img
                src={`/images/1200/${selected_image_name}`}
                style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    cursor: "default",
                    minWidth: 0,
                    minHeight: 0,
                }}
                onClick={function (event) {
                    event.stopPropagation()
                }}
            />

            <ChevronRightIcon style={{width: '96px', height: '96px'}} onClick={() => {
                console.log('right')
                // set_next_image
            }}/>
        </div>
    )
}

export default Display
