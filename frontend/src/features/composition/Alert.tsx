import type { AlertProps } from "./types"
import useAlert from "./useAlert"

const Alert: React.FC<AlertProps> = ({type, message, duration}) => {
    
    const {visible, setIn, setOut} = useAlert({duration})
  
    const styles: Record<string, string> = {

        success: "bg-green-600",
        error: "bg-red-600",
        warning: "bg-yellow-600"
    }

    return (
    <div>
        <button onClick={setIn}>show {type} alert</button>
        {visible &&

            <div onClick={setOut}>
                className = {`${styles[type]}`}

                {message}
            </div>
        }
    </div>
  )
}

export default Alert