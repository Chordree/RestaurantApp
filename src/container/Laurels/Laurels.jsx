import { SubHeading } from "../../components/compExports"
import { images, data } from "../../constants/exports"
import shaw from '../../assets/tryShaw.png'

import './laurels.css'


function AwardCard({ award: { imgUrl, title, subtitle } }) {
  return (
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="awards" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
        <p className="p__opensans">{subtitle}</p>
      </div>
    </div>
  )
  
}



function Laurels() {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>

        <div className="app__laurels_awards">
          {data.awards.map((awardData) => <AwardCard award={awardData} key={awardData.title} />)}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={shaw} alt="shawarma_img" />
      </div>
    </div>
  )
}

export default Laurels


