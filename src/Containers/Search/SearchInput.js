import { useCallback, useContext } from "react";
import { Input, Space } from "antd";
import { WeatherInformation } from "../../Contexts/WeatherInformation";
import { handleSearchInput } from "../../Apis/api";
const { Search } = Input;

export default function SearchInput({setFunc}) {
  const { data, setData } = useContext(WeatherInformation);

  const handleSearch = useCallback((value) => {
    try {
      handleSearchInput(value)
        .then((response) => {
          const receive = {
            location: response.data.location.name,
            temperature: response.data.current.temp_c,
            humidity: response.data.current.humidity,
            condition: response.data.current.condition.text
          };
          setData([
            ...data,
            receive
          ]);
          setFunc(receive);
        });
    } catch (error) {
      console.log("Error fetching weather", error);
      return null;
    }
  }, [data, setFunc, setData]);

  return (
    <>
      <Space direction="vertical">
        <Search
          addonBefore="Enter your location"
          placeholder="input search text"
          allowClear
          onSearch={handleSearch}
        />
      </Space>
    </>
  );
}
