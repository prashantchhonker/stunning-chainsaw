import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from "react-router-dom"
import {
    all_images_selector,
    set_current_image
} from "../app/store.js"
import "./gallery.css"

export default function BasicMasonry() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const all_images = useSelector(all_images_selector)

    return (
        <Box sx={{width: "100%", padding: "3em 5em"}}>
            <span
                style={{
                    fontSize: "40px",
                    letterSpacing: "0.2em",
                    fontFamily: '"Didot eText W01 Italic", serif',
                }}>
                Julia Grant
            </span>

            <hr style={{margin: 0}}/>

            <div style={{
                marginTop: "2em",
                fontFamily: '"Cormorant Garamond", serif',
                lineHeight: "1.5em",
                fontSize: "19px",
                letterSpacing: "0.2em",
                marginBottom: '1em'
            }}>FILM PHOTOGRAPHER, ATX
            </div>

            <Masonry columns={4} spacing={2.5}>
                {
                    all_images.map((image, index) => (
                        <div key={index} className={"grid-item"} onClick={() => {
                            dispatch(set_current_image(image)) // set current image
                            navigate(`/display/${image}`)
                        }}>
                            <img
                                src={`/images/480/${image}`}
                                srcSet={`/images/480/${image}`}
                                alt={image.title}
                                loading="lazy"
                                style={{
                                    borderBottomLeftRadius: 4,
                                    borderBottomRightRadius: 4,
                                    display: 'block',
                                    width: '100%',
                                }}
                            />
                        </div>
                    ))}
            </Masonry>
        </Box>
    );
}

