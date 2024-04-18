import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TableCrud } from "@/components/table";

const Page = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Header />
      <div className="mx-3">
        <TableCrud />
      </div>
      <Footer />
    </div>
  )
}
export default Page;