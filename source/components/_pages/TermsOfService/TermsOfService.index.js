import React from 'react'
import PropTypes from 'prop-types'
import multiLang from '../../_HOC/lang.hoc'
import './TermsOfService.style.styl'
import { history } from '../../../history'

import BaseLayout from '../../grid/BaseLayout/BaseLayout.index'
import ContentSection from '../../ContentSection/ContentSection.index'
import Container from '../../grid/Container/Container.index'

TermsOfService.propTypes = {
  // from HOC Lang.hoc
  dir: PropTypes.string
}

function TermsOfService(props) {

  const {dir} = props
  return (
    <BaseLayout>
      <Container>
        <ContentSection className={`terms-of-service`}>
          <header className="content-section__header" dir={dir}>
            <h1 className="content-section__title">
              terms of service
            </h1>
          </header>
          <div className="terms-of-service__text" dir={dir}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aperiam distinctio eos
              facere labore laborum perferendis soluta ullam. Commodi doloremque doloribus excepturi facere fugiat id
              inventore natus nobis quisquam sed sequi temporibus, vel voluptates? A accusantium ad animi architecto
              aspernatur at blanditiis consectetur dignissimos dolor doloribus eaque earum eligendi eos error est facere
              harum incidunt iste laudantium magni, molestias necessitatibus neque nihil nisi numquam omnis pariatur
              perferendis perspiciatis quis quod rem sequi sint, soluta suscipit tempore unde veritatis. Aliquam atque
              eos eum ex illum maxime minus neque omnis pariatur quasi quibusdam rem soluta ut, veniam voluptates! Eum
              illum iste odio perferendis quia quod repellendus voluptas! Cupiditate debitis deleniti est maxime quaerat
              saepe temporibus voluptatum! Accusantium animi architecto assumenda aut consequatur delectus dolor, eaque
              obcaecati, quae quam quia, sed voluptatem!
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cupiditate dicta hic illum ipsum
              laudantium obcaecati temporibus! Animi, atque culpa enim esse incidunt laudantium modi neque non nulla
              praesentium quaerat quidem repudiandae unde. Corporis error est explicabo illum reprehenderit saepe!
              Accusamus, ad aspernatur autem doloremque eaque eum hic, iure labore odio perspiciatis quae quaerat quos
              ratione temporibus velit? Culpa, delectus fuga, hic id incidunt inventore laudantium nihil odio quo sequi,
              sint velit voluptatem? Aspernatur atque distinctio esse facere modi molestiae odio praesentium quod
              reprehenderit vitae! Incidunt, quod voluptas! Consequatur ipsa ipsam magni maxime non nulla quibusdam
              quisquam? Aliquam aut commodi deserunt doloribus dolorum earum eligendi enim exercitationem fugiat fugit,
              laudantium magni mollitia nisi obcaecati officiis provident quos rem rerum sequi similique. Distinctio
              molestias perferendis placeat? Adipisci exercitationem facere impedit officiis rem. A ab accusantium ad
              aperiam assumenda beatae commodi cum doloremque dolores, dolorum ducimus ea exercitationem explicabo
              facere illo impedit incidunt ipsam laudantium magnam mollitia neque omnis pariatur, qui quidem recusandae
              reiciendis rerum similique? Architecto est eum facere illo praesentium?</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, facilis quam. Accusamus commodi consequatur
              corporis culpa dignissimos dolor doloremque eos error eveniet ex excepturi facilis, fuga fugiat hic in
              nemo neque nesciunt nihil nobis nulla officiis optio provident quis quo saepe similique ullam, unde vitae
              voluptas voluptatum. Architecto commodi, cum dolorem dolores iusto minus porro provident sint! Ab
              consectetur corporis debitis illo, laboriosam laborum modi praesentium quis sint tempore veritatis.
            </p>
          </div>
          <div className="terms-of-service__button-wrapper">
            <button type="button"
              className="terms-of-service__button button button-main"
              onClick={() => history.goBack()}
            >
              Back
            </button>
          </div>
        </ContentSection>
      </Container>
    </BaseLayout>
  )

}

export default multiLang(TermsOfService)