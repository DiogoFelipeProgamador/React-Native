// src/components/MenuModal.tsx
import React from "react";
import { Modal, TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface MenuModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function MenuModal({ visible, onClose }: MenuModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPressOut={onClose} // fecha ao clicar fora
      >
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => { console.log("Perfil"); onClose(); }}>
            <Text style={styles.menuItem}>Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { console.log("Configurações"); onClose(); }}>
            <Text style={styles.menuItem}>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { console.log("Sair"); onClose(); }}>
            <Text style={styles.menuItem}>Sair</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    padding: 20,
  },
  menu: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    width: 180,
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
