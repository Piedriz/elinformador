
import PropTypes from 'prop-types'
import { ContactForm } from '../../organisms/ContactForm'
import { VisitsGraphic } from '../../organisms/VisitsGraphic'

export const NewsDetailGrid = ({ children }) => {
  return (
    <div className="flex justify-center flex-wrap m-8">
      <div className='w-full  max-w-3xl flex  flex-col'>

        <div className="flex justify-center">
          {children}
        </div>

      </div>

      <div className='max-w-3xl w-full xl:max-w-sm  xl:px-10 flex flex-col gap-10 flex-wrap'>
        <ContactForm />
        <VisitsGraphic />
      </div>

    </div>
  )
}

NewsDetailGrid.propTypes = {
  children: PropTypes.node
}
