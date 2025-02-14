import React, { useState } from 'react'
import '../../styles/HireSupport/HireSupportModals.scss';
import arrowWhite from '../../assets/svgs/arrow-white.svg';
import arrowRightBlue from '../../assets/svgs/arrow-blue.svg';
import { Row, Col, Button, Select } from 'antd';
import Modal123Left from './Modal123Left';


const Modal2 = ({ nextPage, previousPage }) => {

    const [selectedCell, setSelectedCell] = useState(null);
    const [dropdownVal, setDropdownVal] = useState(null);
    const [showError, setShowError] = useState(false);
    const [dropdownError, setDropdownError] = useState(false);


    const handleCellClick = (cellId) => {
        setSelectedCell(cellId);
        setShowError(false);

    };
    const handleDropdownChange = (value) => {
        setDropdownVal(value);
        setDropdownError(false);
        console.log(value);
    }
    const handleNextPageCall = () => {
        if (selectedCell != null && dropdownVal != null) {
            nextPage();
        }
        else {
            if (selectedCell == null)
                setShowError(true)
            if (dropdownVal == null) {
                setDropdownError(true)
            }
        }
    }

    const companySizeArray = ['1-10 staff', '11-50 staff', '51-100 staff', '101 - 250 staff', '251-500 staff', '500+ staff']

    const companyValCellStyle = (cellId) => ({
        borderRadius: '2.5rem',
        border: selectedCell === cellId ? '1px solid black' : '1px solid #D5D5D5',
        padding: '1.31rem 1.25rem',
        color: selectedCell === cellId ? 'white' : '#3E3E3E',
        background: selectedCell === cellId ? 'black' : 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.2s ease-in-out',
        fontSize: '1.125rem',
        fontFamily: 'Helvetica Now Display',
        fontWeight: '700'
    });

    return (
        <div className='modal-container modal-2-container'>
            <Modal123Left />
            <div className='modal2-right'>
                {/* <div className='page-no'><span className='curr-page'>2 </span>/ 4</div> */}
                <h1 className='modal2-r-heading'>
                    Tell us about your company
                </h1>

                <p className='modal2-r-subtext'>
                    What's the size of your organization?
                </p>

                <div className='company-val-grid' style={{ marginTop: '3.37rem' }}>
                    <Row gutter={[16, 16]}>
                        {companySizeArray.map((companySize, index) => (
                            <Col key={index}
                                xs={12}
                                sm={12}
                                md={12}
                                lg={8}
                                xl={8}
                                xxl={8} onClick={() => handleCellClick(index)}>
                                <div style={companyValCellStyle(index)} className='company-val-cell'>
                                    {companySize}
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <span className='error-text' style={{ display: ` ${showError ? 'block' : 'none'}` }}>
                        Please select size of your organization.
                    </span>
                </div>

                <div className='modal2-dropdown-container'>
                    <h2 className='dropdown-heading'>What industry does your business operate in?</h2>

                    <Select
                        className='select-container'
                        placeholder='Select Sector'
                        onChange={handleDropdownChange}
                        options={[
                            {
                                value: 'advertising-and-pr',
                                label: 'Advertising & PR',
                            },
                            {
                                value: 'construction-renovation',
                                label: 'Construction Renovation',
                            },
                            {
                                value: 'digital-marketing',
                                label: 'Digital Marketing',
                            },
                            {
                                value: 'ecommerce',
                                label: 'Ecommerce',
                            },
                            {
                                value: 'education',
                                label: 'Education',
                            },
                            {
                                value: 'energy',
                                label: 'Energy',
                            },
                            {
                                value: 'entertainment',
                                label: 'Entertainment',
                            },
                            {
                                value: 'financial-services',
                                label: 'Financial Services',
                            },
                            {
                                value: 'food-beverage',
                                label: 'Food & Beverage',
                            },
                            {
                                value: 'game-dev-support',
                                label: 'Game Dev & Support',
                            },
                            {
                                value: 'government',
                                label: 'Government',
                            },
                            {
                                value: 'hardware-tech-it',
                                label: 'Hardware Tech/IT',
                            },
                            {
                                value: 'health-care',
                                label: 'Healthcare',
                            },
                            {
                                value: 'hospitality',
                                label: 'Hospitality',
                            },
                            {
                                value: 'legal',
                                label: 'Legal',
                            },
                            {
                                value: 'manufacturing',
                                label: 'Manufacturing',
                            },
                            {
                                value: 'media-publishing',
                                label: 'Media Publishing',
                            },
                            {
                                value: 'non-profit',
                                label: 'Non Profit',
                            },
                            {
                                value: 'pharmaceutical',
                                label: 'Pharmaceutical',
                            },
                            {
                                value: 'public-utilities',
                                label: 'Public Utilities',
                            },
                            {
                                value: 'real-estate',
                                label: 'Real Estate',
                            },
                            {
                                value: 'recruiting-staffing',
                                label: 'Recruiting Staffing',
                            },
                            {
                                value: 'retail',
                                label: 'Retail',
                            },
                            {
                                value: 'software-tech-it',
                                label: 'Software Tech/IT',
                            },
                            {
                                value: 'telecoms',
                                label: 'Telecoms',
                            },
                            {
                                value: 'transportation',
                                label: 'Transportation',
                            },
                            {
                                value: 'travel',
                                label: 'Travel',
                            },
                            {
                                value: 'other',
                                label: 'Other sector',
                            },
                        ]}
                    />

                    <span className='error-text' style={{ display: ` ${dropdownError ? 'block' : 'none'}` }}>
                        Please select an option.
                    </span>
                </div>

                <div className='cta-container'>
                    <Button className='begin-cta' onClick={handleNextPageCall}>
                        Next <img src={arrowWhite} className='arrow-icon' /><img src={arrowRightBlue} className='arrow-icon-hover' />
                    </Button>

                    <Button className='back-cta' onClick={previousPage}>
                        Back
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Modal2