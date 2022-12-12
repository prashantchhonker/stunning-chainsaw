import {useNavigate, useParams} from "react-router-dom"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
            <ChevronLeftIcon style={{width: '96px', height: '96px'}}/>
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
            <ChevronRightIcon style={{width: '96px', height: '96px'}}/>
        </div>
    )
}

export default Display
