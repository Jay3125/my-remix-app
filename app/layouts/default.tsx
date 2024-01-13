import { Container } from "react-bootstrap"

const MainLayout = ({children}) => {
  return (
    <Container>
        <div className="p-5">
            {children}
        </div>
    </Container>
  )
}

export default MainLayout
