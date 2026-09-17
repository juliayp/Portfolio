import { CarducciExperience } from './CarducciExperience'
import { CarducciOpeningV2 } from './CarducciOpeningV2'
import { CarducciDevelopmentIntro } from './CarducciDevelopmentIntro'
import { CarducciDevelopmentInteraction } from './CarducciDevelopmentInteraction'
import { CarducciDevelopmentGallery } from './CarducciDevelopmentGallery'
import { CarducciDevelopmentResponsive } from './CarducciDevelopmentResponsive'
import { CarducciResultIntro } from './CarducciResultIntro'
import { CarducciTestimonial } from './CarducciTestimonial'
import './CarducciCaseStudy.css'

export function CarducciCaseStudy({ copy, onClose }) {
  return (
    <div className="case-study" aria-label="Carducci case study">
      <CarducciOpeningV2 copy={copy} />

      <CarducciExperience copy={copy.experience} />

      <CarducciDevelopmentIntro copy={copy.development} />

      <CarducciDevelopmentInteraction copy={copy.development.interaction} />

      <CarducciDevelopmentGallery copy={copy.development.gallery} />

      <CarducciDevelopmentResponsive
        copy={copy.development.responsive}
        privacyCopy={copy.development.privacy}
      />

      <CarducciResultIntro copy={copy.result} />

      <CarducciTestimonial copy={copy.result.testimonial} />

      <div className="case-study-close-wrap">
        <button className="case-study-close" type="button" onClick={onClose}>
          <span>{copy.close}</span>
          <span aria-hidden="true">↑</span>
        </button>
      </div>
    </div>
  )
}
