import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { areas } from '../../../src/components/AreaData';

const SettingFiled = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedSubArea, setSelectedSubArea] = useState(null);
    const [subAreaOptions, setSubAreaOptions] = useState([]);
    const [isSubArea, setIsSubArea] = useState(false);
    const [selectedGender, setSelectedGender] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const genderList = [
        { value: '남성', label: '남성' },
        { value: '여성', label: '여성' },
        { value: '무관', label: '무관' }
    ];

    const handleLocationChange = (selectedOption) => {
        const selectedValue = selectedOption?.value;
        const area = areas.find((area) => area.name === selectedValue);

        if (area) {
            setSubAreaOptions(area.subArea.map((subArea) => ({ value: subArea, label: subArea })));
            setIsSubArea(true);
            setSelectedLocation(selectedOption);
            setSelectedSubArea(null);
        } else {
            setIsSubArea(false);
            setSelectedLocation(selectedOption);
            setSelectedSubArea(null);
        }

        setIsDropdownOpen(true);
    };

    const handleSubAreaChange = (selectedOption) => {
        setSelectedSubArea(selectedOption); // 선택된 하위 지역 저장
        setIsDropdownOpen(false); // 하위 지역 선택 후 드롭다운 닫기
    };

    const displayLocation = () => {
        if (selectedLocation && selectedSubArea) {
            return `${selectedLocation.label} > ${selectedSubArea.label}`; // "상위 > 하위" 형식
        }
        return selectedLocation ? selectedLocation.label : '지역 선택'; // 기본 메시지
    };

    const handleMenuOpen = () => {
        // 드롭다운 열릴 때 상태 초기화
        setSelectedSubArea(null); // 하위 지역 초기화
        setIsSubArea(false); // 하위 지역 없음으로 설정
        setIsDropdownOpen(true); // 드롭다운 열기
    };

    return (
        <Container>
            <StyledSelect
                value={selectedSubArea ? { value: displayLocation(), label: displayLocation() } : selectedLocation}
                onChange={isSubArea ? handleSubAreaChange : handleLocationChange}
                options={
                    !isSubArea
                        ? areas.map((area) => ({ value: area.name, label: area.name }))
                        : subAreaOptions
                }
                placeholder={displayLocation()}
                isClearable={false}
                menuIsOpen={isDropdownOpen}
                onMenuOpen={handleMenuOpen} // 드롭다운 열릴 때 상태 초기화
                onMenuClose={() => setIsDropdownOpen(false)} // 드롭다운 닫기
            />

            <StyledSelect
                value={selectedGender}
                onChange={(option) => setSelectedGender(option)}
                options={genderList}
                placeholder="성별 선택"
                isClearable={false}
                style={{ marginTop: '10px' }}
            />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 10px;
`;

const StyledSelect = styled(Select).attrs({
    styles: {
        control: (base) => ({
            ...base,
            borderRadius: '8px',
            border: '1px solid #ccc',
            boxShadow: 'none',
            '&:hover': {
                border: '1px solid #aaa'
            }
        }),
        menu: (base) => ({
            ...base,
            borderRadius: '8px',
        }),
    }
})`
    width: 70%;
    margin-bottom:5px;
`;

export default SettingFiled;
