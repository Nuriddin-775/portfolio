import { ConfigProvider } from 'antd';
import { ProviderProps } from '../type';

function AntConfigProvider({ children }: ProviderProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#635bff',
          fontSize: 16,
          fontFamily: 'Inter',
          colorText: '#fff',
          // colorBgTextActive: colors.color_white,
        },
        components: {
          Button: {
            controlHeight: 48,
            borderRadius: 62,
          },
          Input: {
            fontSize: 16,
            controlHeight: 40,
            colorText: '#fff',
            colorTextPlaceholder: '#6E7781',
            colorPrimaryHover: '#312474',
            colorBorder: '#494F57',
            colorBgContainer: '#0D1117',
            borderRadius: 6,
          },
          Select: {
            fontSize: 16,
            controlHeight: 40,
            colorText: '#fff',
            colorTextPlaceholder: '#6E7781',
            colorPrimaryHover: '#312474',
            colorPrimary: '#4B38B3',
            controlItemBgActive: '#0D1117',
            colorBorder: '#494F57',
            colorBgContainer: '#0D1117',
            colorBgElevated: '#0D1117',
            borderRadius: 6,
          },
          Dropdown: {
            colorBgElevated: '#37393C',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntConfigProvider;
