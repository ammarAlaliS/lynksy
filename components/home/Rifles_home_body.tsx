import { View } from 'react-native';
import React from 'react';
import RifaCard from '../rifles/RiflesCard';
import { homeDataByCategories } from '@/constants/Rifles';
import Home_title from './Home_title';

const Rifles_home_body = ({ themeColors }: any) => {
  
  return (
    <View style={{ paddingBottom: 0, backgroundColor: themeColors.background, flex:1 }}>
      {homeDataByCategories.map((category) => (
        <View 
        key={category.id} 
        style={{ 
            display:'flex',
            flexDirection: 'column',
            marginTop:5,
            backgroundColor: themeColors.background
        }}
        >
          <View style={{
            paddingVertical: 10,

            borderColor: themeColors.border,
            backgroundColor: themeColors.background,
            paddingHorizontal: 10,
            
          }}>
            <Home_title
              titleFirstIcon={category.headerInformation.titleFirstIcon}
              titleFirstIconType={category.headerInformation.titleFirstIconType || 'font-awesome-5'}
              title={category.headerInformation.title || 'Sin título'}
              titleSecondIcon={category.headerInformation.titleSecondIcon}
              titleSecondIconType={category.headerInformation.titleSecondIconType}
              themeColors={themeColors}
            />
          </View>
     
        </View>
      ))}
    </View>
  );
};

export default Rifles_home_body;
