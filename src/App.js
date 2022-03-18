import { Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"
import "./App.css"
import BudgetCard from "./components/BudgetCard";

function App() {
  return <Container className="my-4">
    <Stack direction="horizontal" gap="2" className="mb-4">
      <h1 className="me-auto">Budgets</h1>
      <Button variant="primary">Add Budget</Button>
      <Button variant="outline-primary">Add Expense</Button>
    </Stack>
    <div className="budget-card-container">
        <BudgetCard name="Entertainment" gray amount={200} max={1000}></BudgetCard>
    </div>
  </Container>
}

export default App;
