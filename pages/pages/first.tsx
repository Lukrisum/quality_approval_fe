import { Button } from "antd";
import Link from "next/link";
import Header from "../../components/header/Header";

export default function nmsl() {
  return (
    <>
      <Header>
        <Link href="/">
          <a>
            <Button>index</Button>
          </a>
        </Link>
      </Header>
    </>
  )
}
