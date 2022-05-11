import styled from "@emotion/styled";
import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import useFilter from "../../hooks/useFilter";

const STEP = 10000;
const MIN = 0;
const MAX = 10000000;

const PriceFilter = () => {
  const [values, setValues] = useState([MIN, MAX]);
  const {
    params,
    setParams,
    selectedFilter,
    setSelectedFilter,
    onClickFilterMenu,
  } = useFilter();

  const applyPriceFilter = () => {
    let priceParams: any = {
      minPrice: values[0],
      maxPrice: values[1],
    };
    if (values[1] === MAX) delete priceParams.maxPrice;
    setParams({
      ...params,
      ...priceParams,
    });
    setSelectedFilter("");
  };
  return (
    <div>
      <h3>
        <button onClick={onClickFilterMenu}>Price</button>
      </h3>
      {selectedFilter === "Price" && (
        <FilterContainer>
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            onChange={(values) => {
              setValues(values);
            }}
            renderTrack={({ props, children }) => (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "100%",
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values,
                      colors: ["#ccc", "#548BF4", "#ccc"],
                      min: MIN,
                      max: MAX,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "42px",
                  width: "42px",
                  borderRadius: "4px",
                  backgroundColor: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 2px 6px #AAA",
                }}
              >
                <div
                  style={{
                    height: "16px",
                    width: "5px",
                    backgroundColor: isDragged ? "#548BF4" : "#CCC",
                  }}
                />
              </div>
            )}
          />
          <div>
            <output style={{ marginTop: "30px" }}>
              {values[0]} - {values[1]}
              {values[1] === MAX && " +"}
            </output>
            <button onClick={applyPriceFilter}>적용</button>
          </div>
        </FilterContainer>
      )}
    </div>
  );
};

const FilterContainer = styled.div`
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  width: 50%;
  height: 100%;
  padding: 0 25%;
  z-index: 10;
`;

export default PriceFilter;
