import './index.css'
import ProductView from '../ProductView'

const ProductPage = () => (
  <div>
    <div className='top-card-item-container'>
      <div className='header-part-container'>
        <img 
          src='https://res.cloudinary.com/dgzuznaxk/image/upload/v1719062249/Frame_1_tbovn8.svg'
          className='logo'
          alt='logo'
        />
      </div>
      <h1>
        The choice is yours.<br />Because they don’t have one.
      </h1>
      <button type='button' className='quick-view-button' data-testid='button'>
        Quick View 
      </button>
    </div>


    <div className='bottom-part-container'>
      <div className='about-heading-container'>
        <img
          src='https://res.cloudinary.com/dgzuznaxk/image/upload/v1719062881/Frame_wjfkzw.svg'
          className='about-heading-design-line'
        />
        <h1 className='heading'>About</h1>
        <img
          src='https://res.cloudinary.com/dgzuznaxk/image/upload/v1719062881/Frame_wjfkzw.svg'
          className='about-heading-design-line'
        />
      </div>
      <p className='about-description'>
        Our products are crafted exclusively from the dreams and screams of young kids 
        who wanted to show their mastery in their chosen fields, 
        but were directed towards a factory for daily wages. Each cracker bursts brighter than 
        their lost smiles, and can be heard louder than their cries for miles. Buy them, 
        burst them, brag about them.
        <br />
        <span className='span-description'>The choice is yours. Because they don’t have one.</span>
      </p>

      <div className='our-product-heading-container'>
        <img
            src='https://res.cloudinary.com/dgzuznaxk/image/upload/v1719062881/Frame_wjfkzw.svg'
            className='about-heading-design-line'
        />
        <h1 className='heading'>Our products</h1>
        <img
            src='https://res.cloudinary.com/dgzuznaxk/image/upload/v1719062881/Frame_wjfkzw.svg'
            className='about-heading-design-line'
        />
      </div>
      <div className='product-container'>
        <ProductView 
            heading='Raju Rassibomb'
            mrp="Raju's Dreams"
        />
        <ProductView 
            heading='Raju Rassibomb'
            mrp="Raju's Dreams"
        />
      </div>
      <img 
        src='https://res.cloudinary.com/dgzuznaxk/image/upload/v1719062881/Frame_wjfkzw.svg'
        className='design-image-line'
      />
    </div>
    <FooterSection />
  </div>
)

export default ProductPage