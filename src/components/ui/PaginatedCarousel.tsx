import { cn } from "@/src/theme/cn";
import React, { useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
  ViewToken,
} from "react-native";

export interface CarouselItem {
  id: string;
  [key: string]: any;
}

export interface PaginatedCarouselProps<T extends CarouselItem> {
  data: T[];
  renderItem: ({
    item,
    index,
  }: {
    item: T;
    index: number;
  }) => React.ReactElement;
  itemWidth: number;
  itemSpacing?: number;
}

export default function PaginatedCarousel<T extends CarouselItem>({
  data,
  renderItem,
  itemWidth,
  itemSpacing = 16,
}: PaginatedCarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<T>>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / itemWidth);

    if (index !== currentIndex && index >= 0 && index < data.length) {
      setCurrentIndex(index);
    }
  };

  const handleViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems.length > 0) {
      const index = viewableItems[0].index || 0;
      if (index !== currentIndex) {
        setCurrentIndex(index);
      }
    }
  };

  const renderCarouselItem = ({ item, index }: { item: T; index: number }) => (
    <View style={{ width: itemWidth, paddingHorizontal: itemSpacing }}>
      {renderItem({ item, index })}
    </View>
  );

  const renderPagination = () => {
    if (data.length <= 1) return null;

    return (
      <View className="flex-row justify-center items-center gap-[8px]">
        {data.map((_, index) => (
          <View
            key={index}
            className={cn("z-10 mt-[-16px] h-[6px] rounded-full", {
              "bg-black w-[40px]": index === currentIndex,
              "bg-[#CDCDCD] w-[16px]": index !== currentIndex,
            })}
          />
        ))}
      </View>
    );
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderCarouselItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemWidth}
        snapToAlignment="center"
        decelerationRate="fast"
        contentContainerStyle={{ paddingVertical: 30 }}
        onScroll={handleScroll}
        onViewableItemsChanged={handleViewableItemsChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id}
        getItemLayout={(_, index) => ({
          length: itemWidth,
          offset: itemWidth * index,
          index,
        })}
      />
      {renderPagination()}
    </View>
  );
}
