const Toast = (
    
    {message, type = "success"}:
    {message: string,
     type?: "success" | "error" | "warning"
    }) => {

    if(!message) return null;

    const colors = {

        success: "bg-green-500",
        error: "bg-red-600",
        warning: "bg-yellow-600"
    }
  return (
    <div
        className={`${colors[type]}`}>
        {message}
    </div>
  )
}

export default Toast