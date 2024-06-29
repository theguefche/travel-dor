import { Button, Input } from "@nextui-org/react"


type Props = {}

const NewsLetterSection = (props: Props) => {
    return (
        <div
            className="full-layout-element flex flex-wrap items-center w-full p-5 text-left md:p-8">
            <div className="flex-1 w-full mx-auto mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2 prose lg:prose-lg">
                <h2>Subscribe to Newsletter</h2>
                <p>Provide your email to get email notification when we launch
                    new
                    products or publish new articles
                </p>
            </div>
            <div className="w-full p-1 flex-0 md:w-auto lg:w-1/2">
                <form className="flex flex-col gap-4 items-center">
                    <Input className="shadow-none border-none rounded-lg" autoComplete="email" name="email" type="email" label="Email" />
                    <Button variant="bordered" className="w-full rounded-lg" color="primary">Subscribe</Button>
                </form>
            </div>
        </div>
    )
}

export default NewsLetterSection