import BreakPointWrap from "../../../../components/breakpointwrap"
import GreenBtn from "../../../../components/greenbtn"

const Guide = () => {
  return (
    <div className="">
        <BreakPointWrap>
            <div className="bg-[#faf4eb] py-14">
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <div data-aos="zoom-in" data-aos-delay="100">
                        <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-6hPRfEBFjjimg-bn-p-s.png?v=1722649509" className="mx-auto" alt="" />
                    </div>
                    <div className="flex items-center md:pe-20">
                        <div className="px-10 md:px-0 pt-10 md:pt-0 text-center">
                            <h3 className="md:text-5xl text-3xl mb-10" data-aos="fade-up" data-aos-delay="100">
                                GUIDE TO SPRING <br />
                                PLANT CARE
                            </h3>
                            <p className="mb-10" data-aos="fade-up" data-aos-delay="300">Keep your plants healthy and thriving as the weather warms up. Browse now for expert tips and advice from Bloomscape's own Grow-How® Team!</p>
                            <div data-aos="fade-up" data-aos-delay="600">
                                <GreenBtn>
                                    SHOP COLLECTION
                                </GreenBtn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BreakPointWrap>
    </div>
  )
}

export default Guide