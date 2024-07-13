export const formatRolePermissionData = (
  permissionIds: Array<number>,
  roleId: number,
) =>
  permissionIds.map((permissionId: number) => {
    return {
      roleId,
      permissionId,
    };
  });
