import Container from "@/components/shared/Container"
import Row from "@/components/shared/Row"

const PurchasesLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <section>
      <Container>
        <Row>
          <h1 className='headline'>Purchases</h1>
        </Row>
        <Row>
          {children}
        </Row>
      </Container>
    </section>
  )
}

export default PurchasesLayout