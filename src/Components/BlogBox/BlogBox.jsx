import MainButton from "../MainButton";

function BlogBox({ img, title }) {
  return (
    <>
      <div>
        <img src={img} alt="blog_img" />
        <p className="font-medium text-[14px] text-[#646464] pt-8 pb-4">
          <i className="fa-solid fa-layer-group text-[#ff0336] text-[16px]"></i>
          &nbsp; By <b>Admin</b> | March 11, 2022 | Yoga
        </p>
        <h2 className="text-[3rem] font-bold mb-6">{title}</h2>
        <p className="font-medium text-[16px] text-[#646464] mb-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum officiis culpa veniam non quam accusantium necessitatibus, eaque quia tenetur voluptas quos, consequatur cumque ipsa, dolorem nemo fugit magni repellendus? Commodi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque perferendis accusamus veritatis eius vel amet omnis iste molestias esse, debitis illum nemo, autem dignissimos. Similique nobis at sint. Eius?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, esse. Placeat debitis beatae, voluptate maiores ratione aliquid nam doloribus sunt iste numquam tempora asperiores. Aliquam molestiae consequatur odit porro obcaecati!
        </p>
        <MainButton
          color={`!text-white`}
          bg={`bg-[#F28C28]`}
          text="purchase now"
          arrowColor={`!text-white`}
          cN="pricing-cta blog-cta"
        />
      </div>
    </>
  );
}

export default BlogBox;