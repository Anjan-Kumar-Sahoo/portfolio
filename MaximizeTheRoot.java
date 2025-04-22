import java.util.*;

public class MaximizeTheRoot {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int tc = sc.nextInt();
        while (tc-- > 0) {
            int n = sc.nextInt();
            int[] a = new int[n + 1];
            List<Integer>[] tree = new ArrayList[n + 1];
            for (int i = 1; i <= n; i++) {
                a[i] = sc.nextInt();
            }
            for (int i = 1; i <= n; i++) {
                tree[i] = new ArrayList<>();
            }
            for (int i = 2; i <= n; i++) {
                int p = sc.nextInt();
                tree[p].add(i);
            }
            System.out.println(dfs(1, tree, a));
        }
        sc.close();
    }

    private static long dfs(int node, List<Integer>[] tree, int[] a) {
        long sum = 0;
        for (int child : tree[node]) {
            sum += dfs(child, tree, a);
        }
        if (sum > a[node]) {
            return sum;
        } else {
            return a[node];
        }
    }
}