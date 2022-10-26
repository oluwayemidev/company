import "../../styles/about.css";
import banner from "../../images/banner2.jpg"

function About (){
    return (
        <div class="container-about">
            <div className="banner2" style={{
                backgroundImage: `url(${banner})`
            }}>
               About Us 
            </div>
            <div className="desc">
                <h1>WHAT DRIVE US</h1>
                <p>Lorem ipsum - Dolor</p>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis laboriosam porro molestiae sit, sint dolores similique voluptatum soluta neque molestias commodi nisi cumque? Recusandae id consectetur animi doloremque natus odio eaque minus nemo voluptate? Voluptates quia pariatur sequi atque expedita obcaecati tenetur voluptas quis, mollitia maxime ratione autem ipsam, eligendi blanditiis deleniti necessitatibus veritatis aliquam fugit dolor cupiditate. Inventore, aut vel id, laudantium alias explicabo accusantium voluptas voluptatum commodi, nulla quos sequi quis iusto unde perspiciatis omnis minus ea maxime ipsum quidem hic nostrum iste. Molestias nobis doloribus similique ratione hic rem necessitatibus praesentium temporibus quisquam distinctio vel aspernatur incidunt nostrum porro, sed nihil ab? Debitis qui nesciunt autem eveniet ducimus impedit, eligendi vitae fuga? Ipsam, totam natus. Similique unde nostrum vero consequatur aliquam repudiandae perferendis corporis laudantium totam nulla nisi delectus obcaecati reprehenderit fuga quidem deleniti beatae a iste illum veniam laborum aliquid, ea tempore harum! Aspernatur corrupti, quis tempore modi debitis nam dolorum accusamus aperiam suscipit, tempora amet sed consectetur, fuga maiores! Saepe, debitis, repellendus laborum dicta temporibus iusto fuga soluta exercitationem ducimus fugit deserunt quis?
                </p>
            </div>
        </div>
    );
}


export default About;