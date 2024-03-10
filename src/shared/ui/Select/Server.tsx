// import { FC } from "react";
// import { patchSelectedData } from "@src/store/slices/selectedDatas";
// import { LibSelect, LibSelectProps } from "@src/components/Lib";
// import { useAppDispatch } from "@src/hooks/redux";
// export interface LibSelectServerProps extends LibSelectProps {
//   tableName: string;
//   itemId: number;
//   field: string;
//   options: anyStringObject;
// }
// const LibSelectServer: FC<LibSelectServerProps> = ({
//   itemId,
//   options,
//   tableName,
//   field,
//   ...props
// }) => {
//   const dispatch = useAppDispatch();

//   return (
//     <LibSelect
//       options={options}
//       onChange={(e: any) => {
//         dispatch(
//           patchSelectedData({
//             tableName,
//             id: itemId,
//             field,
//             value: e.target.value,
//           })
//         );
//       }}
//       {...props}
//     />
//   );
// };

// export default LibSelectServer;
