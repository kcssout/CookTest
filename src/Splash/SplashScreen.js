import React, {useRef, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {useEffect} from 'react';
import {CommonActions} from '@react-navigation/native';

const SplashScreen = props => {
  const [authLoaded, setAuthLoaded] = useState(false);
  const [animationLoaded, setAnimationLoaded] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    // 스플래시 종료 후 메인으로 이동하기까지의 시간 제어, 바로 이동하기를 원하면 삭제해도 무방할듯
    setTimeout(() => {
      setAuthLoaded(true);
    }, 1500);
  }, []);

  const onAnimationFinish = () => {
    setAnimationLoaded(true);
  };

  useEffect(() => {
    console.log("splash1", authLoaded, animationLoaded);

    if (authLoaded && animationLoaded) {
      console.log("splash2", authLoaded, animationLoaded);
      // props.navigation.reset('Main');
      // 스플래시 로딩 후 메인화면 이동 후, 뒤로가기 버튼 누르면 다시 스플래시 화면이 보이는 이슈가 있음
      // 아래처럼 해주면 스플래시 화면으로 돌아가지 않음
      props.navigation.dispatch({
        ...CommonActions.reset({
          index: 0,
          routes: [{name: 'HomeScreen'}],
        }),
      });
    }
  }, [authLoaded, animationLoaded, props.navigation]);

  return (
    <View style={[styles.root, {backgroundColor: 'white'}]}>
      <LottieView
        ref={animation => {
          ref.current = animation;
        }}
        style={styles.lottieView}
        // eslint-disable-next-line prettier/prettier
        source={require('../assets/animation.json')} // 스플래시 json 파일 위치
        // source={require('./splash/logo_animation.json')}
        autoPlay
        loop={false} // true인 경우는 스플래시 무한반복
        onAnimationFinish={onAnimationFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieView: {
    width: '100%',
  },
});

export default SplashScreen;
